import axiosInstance from "../../utils/axiosInstance";

export async function fetchClasses(
  classIds: string[]
): Promise<AirTableResponseObj<ClassObj>[]> {
    const filter = classIds.map(x => `RECORD_ID() = '${x}'`)

  return await axiosInstance.get("classes", {
    params: {
      filterByFormula: `OR(${filter.join()})`,
    },
  });
}
