import { Button } from "ui";
import { getVeryImportantData } from "my-js-lib";

export default function Web() {
  const data = getVeryImportantData();
  return (
    <div>
      <h1>Web Data: {data}</h1>
      <Button />
    </div>
  );
}
