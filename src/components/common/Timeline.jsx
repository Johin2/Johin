const TimelineItem = ({title, date, description}) => {
    return (
      <div className='flex items-start md:flex-row mb-4 md:mb-8'>
        <div className="rounded-full bg-secondary w-2 h-2 m-2 relative"></div>
        <div className='flex flex-col items-start ml-4 w-full h-full'>
          <h2 className='text-md md:text-xl font-bold'>{title}</h2>
          <p className='text-gray-500 text-sm md:text-xl'>{date}</p>
          <p className='text-secondary text-xs md:text-lg'>{description}</p>
        </div>
      </div>
    );
  };
  
  const Timeline = ({events, className}) => {
    return (
      <div className={ `${className}`}>
        {events.map((event, index) => (
          <TimelineItem key={index} title={event.title} description={event.description} date={event.date} />
        ))}
      </div>
    );
  };
  
  export default Timeline;
  