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
      <Badge
        variant="outline"
        className="rounded-full bg-primary/5 dark:bg-primary/10"
      >
        {startYear} - {present ? "Present" : endYear}
      </Badge>
      <Badge
        variant="outline"
        className="rounded-full bg-primary/5 dark:bg-primary/10"
      >
        {location}
      </Badge>
    </div>
  );
};

export default LocationYearBadge;
