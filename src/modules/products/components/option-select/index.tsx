import { ProductOption } from "@medusajs/medusa";
import { clx } from "@medusajs/ui";
import React from "react";

import { onlyUnique } from "@lib/util/only-unique";

type OptionSelectProps = {
  option: ProductOption;
  current: string;
  updateOption: (option: Record<string, string>) => void;
  title: string;
  options: Record<string, any>; // Add options property
};

const OptionSelect: React.FC<OptionSelectProps> = ({
  option,
  current,
  updateOption,
  title,
  options,
}) => {
  const filteredOptions = option.values.map((v) => v.value).filter(onlyUnique);

  if (title.toLowerCase() === "color") {
    return (
      <div className="flex flex-col gap-y-3">
        <span className="text-sm">Select {title}</span>
        <select
          className="border-ui-border-base bg-ui-bg-subtle border text-small-regular h-10 rounded-rounded p-2 flex-1"
          onChange={(e) => updateOption({ [option.id]: e.target.value })}
          value={current}
        >
          {filteredOptions.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm">Select {title}</span>
      <div className="size-quantity-container">
        {filteredOptions.map((v) => {
           return (

            <div key={v} className="size-quantity-input">
            <span className="size-box-span">
              <input
                type="number"
                min="0"
                value={options[option.id] === v ? options.quantity : 0}
                onChange={(e) => updateOption({ [option.id]: v, quantity: e.target.value })}
                className="size-box-input"
              />
            </span>
            <span className="size-box-size-value">{v}</span>
            </div>

          );
        })}
      </div>
    </div>
  );
};

export default OptionSelect;

