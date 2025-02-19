const ProgramLegordulo = ({ programtipus_id, elnevezes }) => {
  return (
      <option value={programtipus_id}>
          {elnevezes}
      </option>
  );
}

export default ProgramLegordulo;

