import dbItems from "../../../assets/DBmok";

function setRandomItem() {
  const min = 0;
  const max = 40;
  const itemNumber = Math.floor(Math.random() * (max - min) + min);

  return dbItems[itemNumber];
}

export default function MenuItem() {
  const item = setRandomItem();

  return (
    <div className="bg-softFawn w-3xs h-82 items-center justify-items-center ">
      <div className="text-lg font-bold p-4">{item.name}</div>
      <div className="h-52 w-52 bg-amber-50 p-4">
        <img src="./src/assets/imgsDB/1.png" className="h-52 w-52"></img>
      </div>
      <div className="">
        {item.description}
        <section className="font-bold">
          Por: R$ {item.fullPrice} dracmas
        </section>
      </div>
    </div>
  );
}
