import Gallery from "../../components/Gallery";

function GalleryPage() {
  return (
    <div className="min-h-screen">
      <div className="text-center py-20">
        <h1 className="text-5xl font-serif mb-4">Inspiration Gallery</h1>
        <p className="text-gray-500">
          Curated design moments that inspire luxury living
        </p>
      </div>

      <Gallery />
    </div>
  );
}

export default GalleryPage;