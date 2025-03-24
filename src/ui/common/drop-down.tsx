"use client";
import { useState, useEffect, useRef } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

type Option = {
  label: string;
  value: string;
};

type PropsDropdown = {
  label: string;
  options: Option[];
  selectedValue: string | undefined;
  onSelect: (value: string | null) => void;
  type: "single" | "multi";
};

const Dropdown = ({
  label,
  options,
  selectedValue,
  onSelect,
  type,
}: PropsDropdown) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Xử lý chọn option (hỗ trợ cả single và multi)
  const handleOptionClick = (
    event: React.MouseEvent<HTMLLIElement>,
    option: Option
  ) => {
    event.preventDefault();
    if (type === "multi") {
      let selectedArray = selectedValue ? selectedValue.split(",") : [];
      if (selectedArray.includes(option.value)) {
        selectedArray = selectedArray.filter((val) => val !== option.value);
      } else {
        selectedArray.push(option.value);
      }
      onSelect(selectedArray.length ? selectedArray.join(",") : null);
    } else {
      onSelect(option.value);
      setIsOpen(false);
    }
  };

  const multiLabel = () => {
    if (type === "multi" && selectedValue) {
      const selectedLabels = selectedValue
        .split(",")
        .map((val) => options.find((opt) => opt.value === val)?.label)
        .filter(Boolean);
      return selectedLabels.length > 1
        ? `${label} (+${selectedLabels.length})`
        : selectedValue;
    }
    return options.find((opt) => opt.value === selectedValue)?.label || label;
  };

  const isSelected =
    type === "multi"
      ? selectedValue && selectedValue.length > 0
      : options.some((option) => option.value === selectedValue);

  return (
    <div
      ref={dropdownRef}
      className="relative flex h-10 items-center justify-between rounded border-[2px] border-primary"
    >
      <button
        onClick={toggleDropdown}
        className={`flex h-full w-full items-center justify-between px-3 ${
          isSelected ? "bg-gray-200 font-semibold" : ""
        }`}
      >
        <span>{multiLabel()}</span>
        <MdOutlineArrowDropDown
          className={`size-6 transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute left-0 top-full z-10 w-full translate-y-1 rounded-xl bg-white opacity-100 shadow-2xl transition-all ease-out">
          <ul>
            {options.map((option) => (
              <li
                key={option.value}
                className="flex items-center gap-2 cursor-pointer p-3 hover:bg-gray-100"
                onClick={(event) => handleOptionClick(event, option)}
              >
                {type === "multi" && (
                  <input
                    type="checkbox"
                    checked={selectedValue?.split(",").includes(option.value)}
                    onChange={() => {}}
                    className="h-4 w-4 rounded checked:accent-teal-300"
                  />
                )}
                <span className="line-clamp-1">{option.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
