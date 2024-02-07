const InviteSection = () => {
    return (
      <div className="mt-6 p-4 bg-white rounded shadow text-center">
        <h2 className="text-lg font-semibold mb-4"></h2>
        <p><strong>To invite</strong> someone to your room share the link below.</p>
        <input 
          type="text" 
          readOnly 
          value="yourclinic.doxy.me/drwelch" 
          className="mt-2 p-2 border rounded w-full text-center"
        />
      </div>
    );
  };
  
  export default InviteSection;
  