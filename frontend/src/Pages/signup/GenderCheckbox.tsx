/** @format */

import { Checkbox } from "@/components/ui/checkbox";

const GenderCheckbox = () => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="male" value="male" name="gender" />
      <label htmlFor="male">Male</label>

      <Checkbox id="female" value="female" name="gender" />
      <label htmlFor="female">Female</label>
    </div>
  );
};

export default GenderCheckbox;
