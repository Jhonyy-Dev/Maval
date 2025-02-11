"use client";

const MapSection = () => {
  return (
    <div className="w-full h-[300px] relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96708.16459681612!2d-74.0516318732341!3d40.75916222961101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20Nueva%20York!5e0!3m2!1ses-419!2sus!4v1739226803686!5m2!1ses-419!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0"
      />
    </div>
  );
};

export default MapSection;
