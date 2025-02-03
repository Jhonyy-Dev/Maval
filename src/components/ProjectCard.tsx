import { Heart, MessageCircle, Link as LinkIcon, PinIcon, Palmtree } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  likes: number;
  comments: number;
  projectUrl: string;
  avatarUrl: string;
  companyName: string;
  mood?: string;
}

export const ProjectCard = ({
  title,
  description,
  imageUrl,
  date,
  likes: initialLikes,
  comments,
  projectUrl,
  avatarUrl,
  companyName,
  mood,
}: ProjectCardProps) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
    } else {
      setLikes(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div 
      ref={cardRef}
      className="group relative bg-white rounded-[1rem] shadow-lg will-change-transform transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(86,79,204,0.2)] hover:-translate-y-1"
    >
      <div 
        className="absolute inset-0 rounded-[1rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-tr from-transparent via-[rgba(86,79,204,0.08)] to-transparent"
      />

      {/* Header */}
      <div className="p-4 relative">
        <div className="flex items-center gap-1.5 mb-3 text-[13px]">
          <PinIcon className="h-4 w-4 text-gray-500" />
          <span className="text-gray-500 font-medium">Pinned Cheep</span>
        </div>
        
        <div className="flex items-start gap-3">
          <img
            src={avatarUrl}
            alt={companyName}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-[15px] text-gray-900">{companyName}</h3>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500 text-sm">{date}</span>
                </div>
              </div>
            </div>
            {mood && (
              <div className="inline-flex items-center gap-1.5 bg-gray-100/80 px-2.5 py-0.5 rounded-full mt-1.5">
                <Palmtree className="h-[14px] w-[14px] text-green-600" />
                <span className="text-[13px] text-gray-600">{mood}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-3 relative">
        <p className="text-[15px] text-gray-800 leading-normal">{description}</p>
      </div>

      {/* Image */}
      <div className="relative aspect-video">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="p-4 pt-3 relative">
        <div className="flex items-center justify-between">
          <div className="flex gap-6">
            <button
              onClick={handleLike}
              className="flex items-center gap-2 text-gray-600 hover:text-[#ff5757] transition-colors"
            >
              <Heart
                className={`h-5 w-5 ${isLiked ? "fill-[red] text-[red]" : ""}`}
              />
              <span className="text-sm">{likes}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-600 hover:text-[#564FCC] transition-colors">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm">{comments}</span>
            </button>
          </div>
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#564FCC] hover:text-[#4842a8] transition-colors text-sm"
          >
            <LinkIcon className="h-4 w-4" />
            <span>Visit Project</span>
          </a>
        </div>
      </div>
    </div>
  );
};
