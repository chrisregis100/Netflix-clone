/* eslint-disable react/prop-types */

export default function MovieRow({ title, movies }) {
  return (
    <section className="px-4 md:px-16 mt-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="relative group cursor-pointer">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-[300px] h-[300px] rounded transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-sm font-semibold">{movie.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
