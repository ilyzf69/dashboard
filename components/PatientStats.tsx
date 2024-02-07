const PatientStats = () => {
    // Données pour le graphique, pour chaque type de patient
    const data = {
      New: 5,
      Sick: 2,
      Existing: 8
    };
  
    // Trouvez la valeur maximale pour la mise à l'échelle du graphique
    const maxValue = Math.max(...Object.values(data));
  
    return (
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Patients Type</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {Object.entries(data).map(([type, value]) => (
            <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '50px' }}>{type}</span>
              <div style={{ background: 'lightgrey', width: '100%', height: '24px', borderRadius: '4px' }}>
                <div 
                  style={{ 
                    background: type === 'New' ? 'blue' : type === 'Sick' ? 'orange' : 'green',
                    width: `${(value / maxValue) * 100}%`, 
                    height: '24px', 
                    borderRadius: '4px',
                  }} 
                />
              </div>
              <span>{value}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '8px' }}>
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
        </div>
      </div>
    );
  };
  
  export default PatientStats;
  