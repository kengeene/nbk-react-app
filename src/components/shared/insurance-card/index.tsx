import Button from "./button";

export default function InsuranceCard({
  title,
  image,
}: {
  title: string;
  image?: string;
}) {
  return (
    <div
      className={
        image +
        " bg-auto bg-no-repeat bg-origin-border bg-center p-10 m-5 rounded-md"
      }
    >
      <div className="text-white">{title}</div>
      <Button />
    </div>
  );
}
