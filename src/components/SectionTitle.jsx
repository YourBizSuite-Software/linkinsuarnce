export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-extrabold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-3xl text-slate-600">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}