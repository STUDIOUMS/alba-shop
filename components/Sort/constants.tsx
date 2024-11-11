import { SelectItem } from "@/ui/CustomSelect";

export const SORT_ITEMS: SelectItem[] = [
  { label: "От дешевых", value: "price" },
  { label: "От дорогих", value: "-price" },
  { label: "По алфавиту [А-Я]", value: "title" },
  { label: "По алфавиту [Я-А]", value: "-title" },
];
