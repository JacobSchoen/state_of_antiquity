type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  return (
    <div>
      <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
        {params.slug}
      </h1>
    </div>
  );
}
