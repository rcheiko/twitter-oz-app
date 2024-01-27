const CheckTextHashtag = ({ text }: { text: string }) => {
  const coloredText = text.split(/(#\w+)/g).map((part, index) => (
    part.startsWith('#') ? (
      <span key={index} className="link">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  ))
  return <>{coloredText}</>
}

export default CheckTextHashtag;