function DeityImage() {
  return (
    <img className="rounded-full" alt="Jenelius" src="https://ozgurozbek.github.io/dnd/min_images/Jenelius_Londste.png" />
  )
}

function DeityDescription() {
  return (
    <p>Demigoddess of devotion, usually associated with fanatic determination.</p>
  );
}

function DeityDomain() {
  return (
    <p>FONTAWESOME</p>
  );
}

function DeityRow() {
  return (
  <div className="m-[auto]">
    <div className="w-[10%] inline-block">
      <DeityImage />
    </div>
    <div className="w-[80%] inline-block">
      <DeityDescription />
    </div>
    <div className="w-[10%] inline-block">
      <DeityDomain />
    </div>
  </div>
  );
}

export default function Deity() {
  return (
    <DeityRow />
  );
}