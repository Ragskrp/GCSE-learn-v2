const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

const envPath = path.resolve(process.cwd(), '.env.local');

if (!fs.existsSync(envPath)) {
    console.error('❌ .env.local file not found!');
    process.exit(1);
}

const envConfig = dotenv.parse(fs.readFileSync(envPath));

const requiredKeys = [
    'NEXT_PUBLIC_FIREBASE_API_KEY',
    'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
    'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
    'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET',
    'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID',
    'NEXT_PUBLIC_FIREBASE_APP_ID'
];

let hasError = false;

console.log('🔍 Checking .env.local configuration...\n');

requiredKeys.forEach(key => {
    const value = envConfig[key];

    if (!value) {
        console.error(`❌ Missing or empty: ${key}`);
        hasError = true;
    } else if (value.trim() === '') {
        console.error(`❌ Empty value for: ${key}`);
        hasError = true;
    } else if (value.includes('your-api-key-here') || value.includes('your-project-id')) {
        console.error(`⚠️  Placeholder detected for: ${key} (Value: "${value}")`);
        hasError = true;
    } else {
        // Check for common formatting issues
        if (value.startsWith(' ')) {
            console.warn(`⚠️  Warning: ${key} has a leading space.`);
        }
        if (value.endsWith(' ')) {
            console.warn(`⚠️  Warning: ${key} has a trailing space.`);
        }
        if (value.startsWith('"') && !value.endsWith('"')) {
            console.warn(`⚠️  Warning: ${key} has an unclosed quote.`);
        }

        // Mask the value for output
        const masked = value.length > 8 ? `${value.substring(0, 4)}...${value.substring(value.length - 4)}` : '****';
        console.log(`✅ ${key} is set (${masked})`);
    }
});

if (hasError) {
    console.log('\n❌ Validation failed. Please fix the issues in .env.local');
    process.exit(1);
} else {
    console.log('\n✅ Validation passed! Your .env.local looks correct.');
    console.log('👉 If you still see errors, try restarting the server: Ctrl+C then npm run dev');
}
