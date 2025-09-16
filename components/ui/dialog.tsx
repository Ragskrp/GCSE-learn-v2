import React from "react"

interface DialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  if (!open) return null
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.4)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
      onClick={() => onOpenChange(false)}
    >
      <div style={{
        background: "#fff",
        borderRadius: 8,
        minWidth: 320,
        maxWidth: "90vw",
        maxHeight: "90vh",
        overflowY: "auto",
        boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
        padding: 24
      }}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export function DialogContent({ children, className }: { children: React.ReactNode, className?: string }) {
  return <div className={className}>{children}</div>
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
  return <div style={{ marginBottom: 16 }}>{children}</div>
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontSize: 20, fontWeight: 600 }}>{children}</h2>
}

export function DialogDescription({ children }: { children: React.ReactNode }) {
  return <p style={{ color: '#666', fontSize: 14 }}>{children}</p>
}
