# Lesson Enhancement Guide

## Structure Pattern for All Lessons

Every lesson should follow this slideshow structure:

### Slide 1: Title & Introduction
```markdown
# 🎯 [Lesson Title]: Your Complete Guide

> **"[Engaging quote or hook]"**

---
```

### Slide 2: Learning Objectives
```markdown
## 🎯 Quest Objectives
By the end of this lesson, you'll be able to:
- 📝 [Objective 1]
- ✨ [Objective 2]
- 🚀 [Objective 3]
- 💡 [Objective 4]

**Estimated Time:** X minutes | **Difficulty:** [Foundation/Higher] | **XP Reward:** XXX ⭐

---
```

### Slides 3-N: Content Chapters
Each major concept gets its own slide:

```markdown
## 📚 Chapter X: [Chapter Title]

### [Subtopic]
[Explanation with examples]

\`\`\`
[Code/Formula examples]
\`\`\`

![Image description](/path/to/image.png)

### 🎮 Quick Check
[Practice question]

<details>
<summary>💡 Show Answer</summary>

[Answer with explanation]
</details>

---
```

### Final Slide: Summary & Practice
```markdown
## 🎯 Key Takeaways

✅ [Takeaway 1]
✅ [Takeaway 2]
✅ [Takeaway 3]

---

## 📝 Practice Problems

1. [Problem 1]
2. [Problem 2]
3. [Problem 3]

**Ready to test your skills? Take the quiz to earn your [Topic] Master badge!** 🏅
```

## Image Placement Guidelines

- **Intro slide**: Hero image showing the concept visually
- **Each major chapter**: Diagram or visual aid
- **Examples**: Step-by-step visual breakdown
- **Real-world applications**: Practical scenario image

## Formatting Best Practices

1. Use emojis to make content engaging (🎯📚✨💡🎮)
2.Add `---` between major slides
3. Use `<details>` tags for interactive answers
4. Include visual diagrams with code blocks or images
5. Add "Quick Check" questions after each concept
6. Keep each slide focused on ONE main idea
7. Use bold, italics, and colors strategically

## Subject-Specific Tips

### Mathematics
- Use number lines, graphs, equations visually
- Include step-by-step worked examples
- Add "Pro Tips" for shortcuts
- Visual proofs where possible

### Science
- Diagrams of cells, atoms, forces
- Real-world applications
- Experiment visuals
- Before/after comparisons

### Humanities
- Timeline graphics
- Character maps
- Historical photos/art
- Quote highlights

## Example Implementations

See:
- `scripts/seed-maths.js` - "Working with Fractions" (lines 45-380)
- Below for Percentages and Linear Equations examples
