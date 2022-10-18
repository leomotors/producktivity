import { useNotTestsQuery } from "@producktivity/codegen";
import { Button } from "@producktivity/design";

export default function Web() {
  const { data } = useNotTestsQuery();

  return (
    <div>
      <h1>Web</h1>
      <p>{JSON.stringify(data)}</p>
      <Button />
    </div>
  );
}
