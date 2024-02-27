"use client"

import GetCrumbs from "@/components/NavigationCrumb";
import Location from "@/components/locations/Locations";
import { Card, Skeleton } from "antd";
import useSWR from "swr";

/**
 * Function to fetch planes of existence data from an API and render them as Location components.
 * @generator
 * @see Location
 * @returns JSX elements representing each plane of existence.
 */
function GetPlanes() {
  /**
     * Fetcher function for API requests.
     * @param args - RequestInfo object containing information about the request.
     * @returns Promise resolving to the parsed JSON response.
     */
    const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://teothe.pythonanywhere.com/getPlanes",
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <Skeleton active />;

  let renderedPlanes = [];
  for (let item of data) {
    {
      renderedPlanes.push(
        <Location
          imageSrc={"./Planes/" + item[0] + ".png"}
          locationProps={{
            name: item[0],
            description: item[1],
          }}
        />
      );
    }
  }
  return renderedPlanes;
}

/**
 * Function to fetch and display information about the planes of existence.
 * @returns An array of JSX elements representing the planes of existence.
 */
export default function LocationsPage() {
  return (
    <section>
      <GetCrumbs path={"Teothe3K,Planes of Existence"} />
      <Card bordered={false} className=" w-full">
        {GetPlanes()}
      </Card>
    </section>
  );
}
