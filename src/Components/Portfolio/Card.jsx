function Card(props) {
  return (
    <div className="card bg-base-300 w-9">
      <div className='group relative w-96'>
        <img className='w-full object-cover' src={props.img} />
        <div className='absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500'>
          <h1 className='text-2xl text-white'>{props.title}</h1>
          <a
            className='mt-5 px-8 py-3 rounded-full bg-primary hover:bg-primary duration-300'
            href='#'
          >
            Code
          </a>
          <a
            className='mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300'
            href='#'
          >
            Demo
          </a>
        </div>
      </div>
      <div className='card-body'>
        <h1 className='card-title'>{props.title}</h1>
      </div>
    </div>
  );
}

export default Card;
