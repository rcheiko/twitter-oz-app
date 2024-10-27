import { Message, User } from "../../utils/fetch/notifications"

export const wrapTextNotification = (message: Message, users: Record<string, User> | undefined) => {
  const elements: JSX.Element[] = []
  let lastIndex = 0

  // Loop through the entities
  message.entities.forEach((entity, index) => {
    const { fromIndex, toIndex, ref, format } = entity
    const userId = ref?.user?.id
    const user = users && userId ? users[userId] : null

    // Add the text before the entity
    if (lastIndex < fromIndex) {
      elements.push(<span key={`text-${index}`}>{message.text.slice(lastIndex, fromIndex)}</span>)
    }

    const bold = format === "Strong"

    if (bold) {
      elements.push(
        <span key={`user-${index}`}><strong>{message.text.slice(fromIndex, toIndex)}</strong></span>
      )
    } else if (user) {
      // Add the user name
      elements.push(
        <span key={`user-${index}`}><strong>{message.text.slice(fromIndex, toIndex)}</strong></span>
      )
    } else {
      // Or just add the entity text
      elements.push(<span key={`user-${index}`}>{message.text.slice(fromIndex, toIndex)}</span>)
    }

    // Put the last index to the end of the entity
    lastIndex = toIndex
  })

  // Add the remaining text
  if (lastIndex < message.text.length) {
    elements.push(<span key="text-end">{message.text.slice(lastIndex)}</span>)
  }

  return elements
}