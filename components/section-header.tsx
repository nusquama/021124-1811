interface SectionHeaderProps {
  title: string
  description: string
  action?: {
    label: string
    href: string
  }
}

export function SectionHeader({ title, description, action }: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      {action && (
        <a 
          href={action.href}
          className="text-sm font-medium hover:text-orange-500 transition-colors"
        >
          {action.label}
        </a>
      )}
    </div>
  )
}