import { useContext } from "react";
import { VendorContext } from "../context/VendorContext";


const Settings = () => {
  const { profile, setProfile } = useContext(VendorContext);
  const update = (e) => setProfile({ ...profile, [e.target.name]: e.target.value });
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Vendor Profile</h2>
      <div className="space-y-4">
        <input name="bakery" value={profile.bakery} onChange={update} className="border p-2 w-full rounded" placeholder="Bakery name" />
        <input name="location" value={profile.location} onChange={update} className="border p-2 w-full rounded" placeholder="Location" />
        <input name="deliveryFee" value={profile.deliveryFee} onChange={update} type="number" className="border p-2 w-full rounded" placeholder="Delivery Fee" />
      </div>
    </div>
  );
};
export default Settings;