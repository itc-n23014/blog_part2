const Hero = (props = { imageOn: false }) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      {props.imageOn && <figure> [画像] </figure>}
    </div>
  )
}
export default Hero
