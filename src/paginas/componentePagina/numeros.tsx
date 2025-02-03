import CountUp from "react-countup";

const numeros = () => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-8 p-8">
      {/* Caja de estadísticas */}
      <div className="flex-1 min-w-[200px] max-w-[300px] text-center bg-white p-6 rounded-[1rem] shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <p className="text-6xl font-bold text-[#564FCC]">
          +<CountUp end={450} />
        </p>
        <p className="text-gray-700 text-2xl mt-3">Projects Completed</p>
      </div>

      <div className="flex-1 min-w-[200px] max-w-[300px] text-center bg-white p-6 rounded-[1rem] shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <p className="text-6xl font-bold text-[#564FCC]">
          +<CountUp end={410} />
        </p>
        <p className="text-gray-700 text-2xl mt-3">Happy Clients</p>
      </div>

      <div className="flex-1 min-w-[200px] max-w-[300px] text-center bg-white p-6 rounded-[1rem] shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <p className="text-6xl font-bold text-[#564FCC]">
          +<CountUp end={520} />
        </p>
        <p className="text-gray-700 text-2xl mt-3">Websites Created</p>
      </div>

      <div className="flex-1 min-w-[200px] max-w-[300px] text-center bg-white p-6 rounded-[1rem] shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <p className="text-6xl font-bold text-[#564FCC]">
          +<CountUp end={450} />
        </p>
        <p className="text-gray-700 text-2xl mt-3">Digital Solutions</p>
      </div>
    </div>
  );
};

export default numeros;
