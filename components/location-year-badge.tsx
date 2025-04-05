import { Badge } from "./ui/badge";

interface LocationYearBadgeProps {
  startYear: number;
  endYear?: number | undefined;
  location: string;
  present?: boolean;
}

const LocationYearBadge = (props: LocationYearBadgeProps) => {
  const { startYear, endYear, location, present } = props;
  return (
    <div className="flex gap-x-4">
      <Badge variant="outline">
        {startYear} - {present ? "Present" : endYear}
      </Badge>
      <Badge variant="outline">{location}</Badge>
    </div>
  );
};

export default LocationYearBadge;
