
import Header from "@/components/Header";
import ScheduleCalendar from "@/components/ScheduleCalendar";

const Schedule = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Agendamentos
            </h1>
            <p className="text-gray-600">
              Reserve seu horário no campo society
            </p>
          </div>
          
          <ScheduleCalendar />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
