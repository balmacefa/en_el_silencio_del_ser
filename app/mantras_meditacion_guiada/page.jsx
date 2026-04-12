export default function MantrasMeditacionGuiada() {
  return (
    <div className="container">
      <header>
        <h1>Mantras y Meditaciones Guiadas</h1>
        <p>
          Una colección personal de mantras y meditaciones de YouTube que me han
          acompañado en el camino. Cada una ofrece una puerta hacia la calma y
          el autoconocimiento.
        </p>
      </header>

      <main style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
        {/** Video 1 */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px' }}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/sygQyrUdK_s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <h2>Become Dangerously Seductive - Tantric Sexuality Music | Irresistible Magnetism for Men and Women</h2>
            <p>Reveal your primal magnetism and become a social magnet with sacred tantric vibrations. The social magnetism and your general ability to attract other people is tightly linked to your sexual energy flow.</p>
          </div>
        </div>

        {/** Video 2 */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px' }}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/ojnygUNDHx8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <h2>SUPER HUMAN SENSITIVE POWERS</h2>
            <p>Escuchar con fe de que obtendras poder sobrehumano de sensibilidad. Esta meditación te ayudará a desarrollar tus habilidades psíquicas y a abrir tu mente a nuevas posibilidades.</p>
          </div>
        </div>

        {/** Video 3 */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px' }}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/ps43KwRm6pQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <h2>Cuerpo poderoso</h2>
            <p>Mejor cuerpo, mejor salud, mejor vida.</p>
          </div>
        </div>

        {/** Video 4 */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px' }}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/6VKi0StcOxI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <h2>Limpieza de corazón, con agua de luz</h2>
            <p>Love and appreciation for the erotic energy that flows through us. This meditation helps you connect with your sensuality and embrace your inner desires.</p>
          </div>
        </div>

        {/** Video 5 */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px' }}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/yv9E_uhl43k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <h2>TRANCE CHAMÁNICO</h2>
            <p>Sincroniza los hemisferios cerebrales, crea una experiencia trascendental y te conecta con tu universo interno.</p>
          </div>
        </div>

        {/** Video 6 */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px' }}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/pMv-yrd_iyM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <h2>Samadhi por silencio respiratorio</h2>
            <p>Eliminar la respiracion del conciente y subconciente, para alcanzar una muerte ego.</p>
          </div>
        </div>

        {/** Video 7 */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 300px' }}>
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/djkLm3WpUOE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div style={{ flex: '1 1 300px' }}>
            <h2>Chant of the Mystics: Divine Gregorian Chant "Kyrie eleison (orbis factor)" - 2 Hours</h2>
            <p>This mystical gregorian melody gives a glimpse of what can be found in the core of western spirituality. It is sung in the traditional roman-catholic liturgy, specifically found in the 11th mass music collection, called "orbis factor". "Kyrie eleison" is greek and translates to "God, have mercy". This is my personal heartfelt version of the chant.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
