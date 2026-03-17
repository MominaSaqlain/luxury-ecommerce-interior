import RenderGallery from '../../components/common/RenderGallery';
import PageHeader from '../../components/common/PageHeader';

function RendersPage() {
  return (
    <div className="min-h-screen">
      <PageHeader title="3D Renders" subtitle="Photorealistic visualizations" />
      <RenderGallery />
    </div>
  );
}

export default RendersPage;
