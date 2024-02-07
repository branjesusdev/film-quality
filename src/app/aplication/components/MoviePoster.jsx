export function MoviePoster ({ title, description, img, vote }) {
  return (
    <li className='rounded-xl overflow-hidden shadow-md transition-all group relative cursor-pointer'>
      <img
        className='object-cover object-center group-hover:bg-red-950 group-hover:opacity-50 group-hover:contrast-100 group-hover:blur-[2px] cursor-pointer transition-all ease-in-out duration-300 aspect-[2/3] w-full h-full'
        src={img}
        srcSet={img}
        decoding='async'
        alt={title}
        width='780'
        height='1170'
      />
      <div className='transition-all flex flex-col w-full gap-3 absolute bottom-0 left-0 px-4 py-2 group-hover:p-6  rounded-t-xl bg-[rgba(0,0,0,0.50)] group-hover:bg-[rgba(0,0,0,0.80)] z-10'>
        <h1 className='hidden group-hover:block'>{title}</h1>
        <p className='transition-all hidden group-hover:[display:-webkit-box] overflow-hidden [-webkit-box-orient:vertical] [-webkit-line-clamp:4] text-white/80'>
          {description}
        </p>
        <span className='text-yellow-400 text-xs ml-auto space-x-6'>
          ⭐ {vote}
        </span>
      </div>
    </li>
  )
}

export default MoviePoster
