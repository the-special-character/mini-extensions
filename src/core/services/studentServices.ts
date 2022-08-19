import axiosInstance from "../../utils/axiosInstance";

export async function fetchStudent(name: string): Promise<AirTableResponseObj<Student>[]> {
  return await axiosInstance.get("Students", {
    params: {
      filterByFormula: `({Name}='${name}')`,
    },
  });
}

export async function fetchStudents(studentIds: string[]): Promise<AirTableResponseObj<Student>[]> {
  const filter = studentIds.map(x => `RECORD_ID() = '${x}'`)
  return await axiosInstance.get("Students", {
    params: {
      filterByFormula: `OR(${filter.join()})`,
    },
  });
}
