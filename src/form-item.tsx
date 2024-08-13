export default function FormItem({
  labelText,
  placeholderText,
}: {
  labelText: string;
  placeholderText: string;
}) {
  return (
    <>
      <label className="my-3">{labelText}</label>
      <input
        className="p-3 bg-transparent border border-solid border-white"
        placeholder={placeholderText}
      />
    </>
  );
}
