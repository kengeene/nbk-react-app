export default function Banner({
  banner,
  bannerText,
}: {
  banner: string;
  bannerText: string;
}) {
  return (
    <div className="relative">
      <img src={bannerText} className="absolute left-2 bottom-40" />
      <img src={banner} width="100%" />
    </div>
  );
}
