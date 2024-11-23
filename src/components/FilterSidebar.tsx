import React from 'react';
import { X } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  count: number;
}

interface FilterGroup {
  name: string;
  options: FilterOption[];
}

interface FilterSidebarProps {
  filters: FilterGroup[];
  selectedFilters: string[];
  onFilterChange: (filterId: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  isOpen: boolean;
  onClose: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  selectedFilters,
  onFilterChange,
  priceRange,
  onPriceRangeChange,
  isOpen,
  onClose,
}) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-xl transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}>
      <div className="h-full overflow-y-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Filtreler</h2>
          <button onClick={onClose} className="md:hidden">
            <X size={24} />
          </button>
        </div>

        {/* Price Range */}
        <div className="mb-8">
          <h3 className="text-sm font-medium mb-4">Fiyat Aralığı</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => onPriceRangeChange([Number(e.target.value), priceRange[1]])}
                className="w-24 px-2 py-1 border rounded-md"
              />
              <span className="text-gray-500">-</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
                className="w-24 px-2 py-1 border rounded-md"
              />
            </div>
            <input
              type="range"
              min="0"
              max="10000"
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([priceRange[0], Number(e.target.value)])}
              className="w-full"
            />
          </div>
        </div>

        {/* Filter Groups */}
        {filters.map((group) => (
          <div key={group.name} className="mb-8">
            <h3 className="text-sm font-medium mb-4">{group.name}</h3>
            <div className="space-y-3">
              {group.options.map((option) => (
                <label key={option.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedFilters.includes(option.id)}
                    onChange={() => onFilterChange(option.id)}
                    className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    {option.label} ({option.count})
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* Clear Filters */}
        {selectedFilters.length > 0 && (
          <button
            onClick={() => selectedFilters.forEach(onFilterChange)}
            className="w-full px-4 py-2 text-sm text-primary-600 border border-primary-600 rounded-lg hover:bg-primary-50"
          >
            Filtreleri Temizle
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;