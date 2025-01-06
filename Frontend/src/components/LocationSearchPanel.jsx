import { MdLocationPin } from "react-icons/md";

const LocationSearchPanel = ({ setPanelOpen, setVehiclePanel }) => {
  // sample array
  const addresses = [
    "123 Maple St, Springfield, IL 62704",
    "45 Ocean Ave, Miami, FL 33139",
    "678 Pine Ln, Denver, CO 80203",
    "901 Sunset Blvd, Los Angeles, CA 90028",
    "250 River Rd, Austin, TX 78701",
    "789 Birch Dr, Seattle, WA 98101",
    "33 Oakwood Ct, Boston, MA 02118",
    "555 Cedar Pl, Portland, OR 97205",
    "610 Redwood Ave, San Diego, CA 92101",
    "412 Lakeview Rd, Orlando, FL 32801",
  ];

  return (
    <div>
      {addresses.map((address, index) => (
        <div
          onClick={() => {
            setVehiclePanel(true);
            setPanelOpen(false);
          }}
          key={index}
          className="flex items-center justify-start gap-4 my-2 border-gray-50 active:border-black active:border-2 border-2 p-3 rounded-xl"
        >
          {/* sample data */}
          <h2 className="bg-[#eeeeee] flex items-center justify-center p-3 rounded-full">
            <MdLocationPin className=" text-xl" />
          </h2>
          <h4 className="font-medium">{address}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
