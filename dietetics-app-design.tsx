import React, { useState } from 'react';

const DieteticsTrainingApp = () => {
  const [currentView, setCurrentView] = useState('home');
  const [patientProfile, setPatientProfile] = useState(null);

  // Sample patient profiles
  const patientProfiles = [
    {
      id: 1,
      name: "Patiënt A",
      age: 45,
      gender: "Vrouw",
      height: 168,
      weight: 85,
      conditions: ["Type 2 diabetes", "Hypertensie"],
      allergies: ["Noten", "Schelpdieren"],
      preferences: ["Lokaal geproduceerd voedsel", "Vegetarische opties"],
      lifestyle: "Kantoorbaan, 2x per week lichte beweging",
      goals: "Gewichtsverlies, bloedsuikerbeheer"
    },
    {
      id: 2,
      name: "Patiënt B",
      age: 28,
      gender: "Man",
      height: 183,
      weight: 72,
      conditions: ["IBS", "Lactose-intolerantie"],
      allergies: ["Lactose"],
      preferences: ["Snelle maaltijden", "Eiwitrijk"],
      lifestyle: "Actief, sport 4x per week",
      goals: "Spieropbouw, symptoombeheersing IBS"
    },
    {
      id: 3,
      name: "Patiënt C",
      age: 67,
      gender: "Man",
      height: 175,
      weight: 92,
      conditions: ["Hartfalen", "Nierfunctiestoornis"],
      allergies: ["Geen"],
      preferences: ["Traditionele Nederlandse keuken"],
      lifestyle: "Gepensioneerd, lichte dagelijkse wandeling",
      goals: "Zoutbeperking, vochtbalans, algemene gezondheid"
    }
  ];

  // Navigation menu
  const NavMenu = () => (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">DiëtetiekTrainer</h1>
        <div className="flex space-x-4">
          <button onClick={() => setCurrentView('home')} className="px-3 py-2 rounded hover:bg-blue-700">Home</button>
          <button onClick={() => setCurrentView('patients')} className="px-3 py-2 rounded hover:bg-blue-700">Patiënten</button>
          <button onClick={() => setCurrentView('knowledge')} className="px-3 py-2 rounded hover:bg-blue-700">Kennisbank</button>
          <button onClick={() => setCurrentView('practice')} className="px-3 py-2 rounded hover:bg-blue-700">Oefeningen</button>
        </div>
      </div>
    </nav>
  );

  // Home view
  const HomeView = () => (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Welkom bij DiëtetiekTrainer</h2>
        <p className="mb-4">
          Deze applicatie helpt diëtetiekstudenten bij het ontwikkelen van vaardigheden 
          voor het geven van gepersonaliseerd voedingsadvies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-bold text-lg mb-2">Patiëntprofielen</h3>
            <p>Oefen met diverse patiëntscenario's en leer omgaan met verschillende gezondheidsbehoeften.</p>
            <button 
              onClick={() => setCurrentView('patients')} 
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Bekijk patiënten
            </button>
          </div>
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-bold text-lg mb-2">Kennisbank</h3>
            <p>Toegang tot evidence-based richtlijnen en de nieuwste inzichten in voedingsleer.</p>
            <button 
              onClick={() => setCurrentView('knowledge')} 
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Open kennisbank
            </button>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
            <h3 className="font-bold text-lg mb-2">Oefenmodule</h3>
            <p>Verbeter je adviesvaardigheden door virtuele gesprekken met patiënten te oefenen.</p>
            <button 
              onClick={() => setCurrentView('practice')} 
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
            >
              Start oefening
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Patients view
  const PatientsView = () => (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Patiëntprofielen</h2>
      <p className="mb-6">
        Kies een patiëntprofiel om te werken aan een gepersonaliseerd voedingsadvies.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patientProfiles.map(patient => (
          <div key={patient.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-100 p-3">
              <h3 className="text-xl font-bold">{patient.name}</h3>
              <p>{patient.age} jaar, {patient.gender}</p>
            </div>
            <div className="p-4">
              <div className="mb-2">
                <span className="font-semibold">Aandoeningen:</span> {patient.conditions.join(", ")}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Allergieën:</span> {patient.allergies.join(", ")}
              </div>
              <div className="mb-2">
                <span className="font-semibold">Doel:</span> {patient.goals}
              </div>
              <button 
                onClick={() => {
                  setPatientProfile(patient);
                  setCurrentView('patientDetail');
                }} 
                className="mt-3 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Selecteer patiënt
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Patient detail view
  const PatientDetailView = () => {
    const [recommendationTab, setRecommendationTab] = useState('general');

    if (!patientProfile) return <div>Geen patiënt geselecteerd</div>;

    return (
      <div className="container mx-auto p-4">
        <button 
          onClick={() => setCurrentView('patients')} 
          className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
        >
          ← Terug naar patiëntenlijst
        </button>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-4">
            <h2 className="text-2xl font-bold">{patientProfile.name}</h2>
            <p className="text-blue-100">
              {patientProfile.age} jaar, {patientProfile.gender} | {patientProfile.height} cm, {patientProfile.weight} kg
            </p>
          </div>
          
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-bold mb-2">Gezondheidsinformatie</h3>
                <ul className="space-y-2">
                  <li><span className="font-semibold">BMI:</span> {(patientProfile.weight / ((patientProfile.height/100) * (patientProfile.height/100))).toFixed(1)}</li>
                  <li><span className="font-semibold">Aandoeningen:</span> {patientProfile.conditions.join(", ")}</li>
                  <li><span className="font-semibold">Allergieën:</span> {patientProfile.allergies.join(", ")}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">Leefstijl & Voorkeuren</h3>
                <ul className="space-y-2">
                  <li><span className="font-semibold">Activiteit:</span> {patientProfile.lifestyle}</li>
                  <li><span className="font-semibold">Voorkeuren:</span> {patientProfile.preferences.join(", ")}</li>
                  <li><span className="font-semibold">Doelen:</span> {patientProfile.goals}</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Voedingsadvies opstellen</h3>
              
              <div className="border-b border-gray-200">
                <nav className="flex -mb-px">
                  <button 
                    onClick={() => setRecommendationTab('general')} 
                    className={`py-2 px-4 border-b-2 font-medium text-sm ${
                      recommendationTab === 'general' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Algemeen advies
                  </button>
                  <button 
                    onClick={() => setRecommendationTab('dietary')} 
                    className={`ml-8 py-2 px-4 border-b-2 font-medium text-sm ${
                      recommendationTab === 'dietary' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Voedingspatroon
                  </button>
                  <button 
                    onClick={() => setRecommendationTab('goals')} 
                    className={`ml-8 py-2 px-4 border-b-2 font-medium text-sm ${
                      recommendationTab === 'goals' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    Doelstellingen
                  </button>
                </nav>
              </div>
              
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                {recommendationTab === 'general' && (
                  <div>
                    <h4 className="font-bold mb-2">Algemeen voedingsadvies</h4>
                    <p className="mb-4">
                      Gezien de aandoeningen en allergieën van de patiënt, zijn de volgende factoren belangrijk om in overweging te nemen:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      {patientProfile.conditions.includes("Type 2 diabetes") && (
                        <li>Bloedglucoseregulatie door beperking van toegevoegde suikers en geraffineerde koolhydraten</li>
                      )}
                      {patientProfile.conditions.includes("Hypertensie") && (
                        <li>Natriumbeperking (max. 2000mg per dag)</li>
                      )}
                      {patientProfile.conditions.includes("IBS") && (
                        <li>Vermijden van FODMAP-rijke voedingsmiddelen die symptomen kunnen verergeren</li>
                      )}
                      {patientProfile.conditions.includes("Hartfalen") && (
                        <li>Strikte natriumbeperking en vochtbalans monitoren</li>
                      )}
                      {patientProfile.conditions.includes("Nierfunctiestoornis") && (
                        <li>Beperking van fosfaat, kalium en eventueel eiwitten afhankelijk van de nierfunctie</li>
                      )}
                      {patientProfile.allergies.map(allergie => (
                        <li key={allergie}>Vermijd {allergie.toLowerCase()}</li>
                      ))}
                    </ul>
                    
                    <textarea 
                      className="w-full p-3 border rounded-lg mt-4" 
                      rows="5" 
                      placeholder="Schrijf hier je persoonlijke advies voor deze patiënt..."
                    ></textarea>
                    
                    <div className="mt-4 flex justify-end">
                      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                        Advies opslaan
                      </button>
                    </div>
                  </div>
                )}
                
                {recommendationTab === 'dietary' && (
                  <div>
                    <h4 className="font-bold mb-2">Voedingspatroon</h4>
                    <p>Stel een gepersonaliseerd voedingspatroon samen voor deze patiënt.</p>
                    
                    {/* Hier zou een interface komen om een voedingsschema samen te stellen */}
                    <div className="mt-4 bg-white p-4 rounded border">
                      <h5 className="font-bold">Dagelijks voedingsschema</h5>
                      <div className="mt-3">
                        <label className="block text-sm font-medium mb-1">Ontbijt</label>
                        <textarea className="w-full p-2 border rounded" rows="2"></textarea>
                      </div>
                      <div className="mt-3">
                        <label className="block text-sm font-medium mb-1">Lunch</label>
                        <textarea className="w-full p-2 border rounded" rows="2"></textarea>
                      </div>
                      <div className="mt-3">
                        <label className="block text-sm font-medium mb-1">Avondmaaltijd</label>
                        <textarea className="w-full p-2 border rounded" rows="2"></textarea>
                      </div>
                      <div className="mt-3">
                        <label className="block text-sm font-medium mb-1">Tussendoortjes</label>
                        <textarea className="w-full p-2 border rounded" rows="2"></textarea>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-end">
                      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                        Schema opslaan
                      </button>
                    </div>
                  </div>
                )}
                
                {recommendationTab === 'goals' && (
                  <div>
                    <h4 className="font-bold mb-2">Doelstellingen</h4>
                    <p className="mb-3">
                      Stel doelstellingen op voor deze patiënt op basis van de gestelde doelen: <strong>{patientProfile.goals}</strong>
                    </p>
                    
                    <div className="bg-white p-4 rounded border">
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Korte termijn doelen (4 weken)</label>
                        <textarea className="w-full p-2 border rounded" rows="2"></textarea>
                      </div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Middellange termijn doelen (3 maanden)</label>
                        <textarea className="w-full p-2 border rounded" rows="2"></textarea>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Lange termijn doelen (6+ maanden)</label>
                        <textarea className="w-full p-2 border rounded" rows="2"></textarea>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-end">
                      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                        Doelen opslaan
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Knowledge base view
  const KnowledgeBaseView = () => (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Kennisbank</h2>
      <p className="mb-6">
        Toegang tot evidence-based richtlijnen en de nieuwste inzichten in de voedingsleer.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-3">Klinische Richtlijnen</h3>
          <ul className="space-y-2">
            <li className="text-blue-600 hover:underline cursor-pointer">Richtlijn Diabetes Mellitus type 2</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Richtlijn Cardiovasculair Risicomanagement</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Richtlijn Obesitas</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Richtlijn Ondervoeding</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Richtlijn Voeding bij Nierfunctiestoornissen</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-3">Wetenschappelijk Onderzoek</h3>
          <ul className="space-y-2">
            <li className="text-blue-600 hover:underline cursor-pointer">Mediterraan dieet en cardiovasculaire gezondheid</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Effecten van intermittent fasting</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Voedingsinterventies bij metabole ziekten</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Darmmicrobioom en voeding</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Plantaardige eiwitten en gezondheid</li>
          </ul>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-3">Praktische Hulpmiddelen</h3>
          <ul className="space-y-2">
            <li className="text-blue-600 hover:underline cursor-pointer">Voedingswaardentabel</li>
            <li className="text-blue-600 hover:underline cursor-pointer">BMI Calculator</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Energiebehoefte Calculator</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Voedingsdagboek Template</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Patientenvoorlichting Materialen</li>
          </ul>
        </div>
      </div>
    </div>
  );

  // Practice module view
  const PracticeView = () => (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Oefenmodule</h2>
      <p className="mb-6">
        Verbeter je adviesvaardigheden door virtuele gesprekken met patiënten te oefenen.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-3">Advies Scenario's</h3>
          <p className="mb-4">
            Oefen met verschillende adviesscenario's om je vaardigheden te verbeteren.
          </p>
          <ul className="space-y-3">
            <li className="p-3 bg-blue-50 rounded border border-blue-100 cursor-pointer hover:bg-blue-100">
              <span className="font-medium">Scenario 1:</span> Eerste consult met een patiënt met nieuw gediagnosticeerde diabetes type 2
            </li>
            <li className="p-3 bg-blue-50 rounded border border-blue-100 cursor-pointer hover:bg-blue-100">
              <span className="font-medium">Scenario 2:</span> Follow-up gesprek met een patiënt die moeite heeft met therapietrouw
            </li>
            <li className="p-3 bg-blue-50 rounded border border-blue-100 cursor-pointer hover:bg-blue-100">
              <span className="font-medium">Scenario 3:</span> Advies aan een sporter met specifieke voedingsdoelen
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-3">Communicatievaardigheden</h3>
          <p className="mb-4">
            Verbeter je communicatie door te oefenen met verschillende gesprekstechnieken.
          </p>
          <ul className="space-y-3">
            <li className="p-3 bg-green-50 rounded border border-green-100 cursor-pointer hover:bg-green-100">
              <span className="font-medium">Motiverende gespreksvoering:</span> Technieken om patiënten te motiveren tot gedragsverandering
            </li>
            <li className="p-3 bg-green-50 rounded border border-green-100 cursor-pointer hover:bg-green-100">
              <span className="font-medium">Omgaan met weerstand:</span> Strategieën voor patiënten die terughoudend zijn
            </li>
            <li className="p-3 bg-green-50 rounded border border-green-100 cursor-pointer hover:bg-green-100">
              <span className="font-medium">Uitleggen van complexe concepten:</span> Medische informatie begrijpelijk maken
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-6 bg-purple-50 p-5 rounded-lg shadow border border-purple-100">
        <h3 className="font-bold text-lg mb-3">Virtuele Patiëntgesprekken</h3>
        <p className="mb-4">
          Oefen een volledig adviesgesprek in een gesimuleerde omgeving en ontvang feedback.
        </p>
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Start virtueel gesprek
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <NavMenu />
      
      {currentView === 'home' && <HomeView />}
      {currentView === 'patients' && <PatientsView />}
      {currentView === 'patientDetail' && <PatientDetailView />}
      {currentView === 'knowledge' && <KnowledgeBaseView />}
      {currentView === 'practice' && <PracticeView />}
    </div>
  );
};

export default DieteticsTrainingApp;