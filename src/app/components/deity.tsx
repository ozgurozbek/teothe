function getText() {
}

function DeityImage() {
  return (
    <img src="https://ozgurozbek.github.io/dnd/min_images/Jenelius_Londste.png"/>
  )
}

function DeityDescription() {
  return(
    <p>Demigoddess of devotion, usually associated with fanatic determination.</p>
  );
}

export default function Deity() {
    return(
      <div>
        <DeityImage/>
        <DeityDescription/>
      </div>
    );
  }