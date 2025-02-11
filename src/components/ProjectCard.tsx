import { Heart, MessageCircle, Link as LinkIcon, PinIcon, Palmtree, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { supabase } from '../lib/supabase';

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

interface Comment {
  id: number;
  user: string;
  avatar: string;
  content: string;
  timestamp: string;
  project_id?: string;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [commentText, setCommentText] = useState("");
  const [projectComments, setProjectComments] = useState<Comment[]>([]);

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('project_id', title)
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (data) {
        const formattedComments = data.map(comment => ({
          id: comment.id,
          user: comment.user_name,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${comment.user_name}`,
          content: comment.content,
          timestamp: new Date(comment.created_at).toLocaleString(),
        }));
        setProjectComments(formattedComments);
      }
    } catch (error) {
      console.error('Error loading comments:', error);
    }
  };

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handleLike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
    } else {
      setLikes(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    try {
      const { data, error } = await supabase
        .from('comments')
        .insert([
          {
            project_id: title,
            user_name: 'Usuario Anónimo',
            content: commentText,
            created_at: new Date().toISOString(),
          }
        ])
        .select();

      if (error) throw error;

      if (data) {
        const newComment: Comment = {
          id: data[0].id,
          user: data[0].user_name,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${data[0].user_name}`,
          content: data[0].content,
          timestamp: new Date(data[0].created_at).toLocaleString(),
        };

        setProjectComments([newComment, ...projectComments]);
        setCommentText('');
      }
    } catch (error) {
      console.error('Error saving comment:', error);
    }
  };

  return (
    <>
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
        <div 
          className="relative aspect-video cursor-pointer"
          onClick={handleOpenModal}
        >
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
              <button 
                onClick={handleOpenModal}
                className="flex items-center gap-2 text-gray-600 hover:text-[#564FCC] transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm">{comments}</span>
              </button>
            </div>
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#564FCC] hover:text-[#4842a8] transition-colors text-sm text-glow"
            >
              <LinkIcon className="h-4 w-4" />
              <span>Visit Project</span>
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div 
            ref={modalRef}
            className="bg-white w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl transform transition-all"
          >
            <div className="relative max-h-[90vh] overflow-y-auto">
              {/* Imagen Principal */}
              <div className="relative aspect-[4/3] sm:aspect-[16/9]">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
                >
                  <X className="h-5 w-5 text-gray-700" />
                </button>
              </div>

              {/* Información y Comentarios */}
              <div className="p-4 sm:p-6">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <img
                    src={avatarUrl}
                    alt={companyName}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 mb-1">
                        <h2 className="text-lg font-bold text-gray-900">{companyName}</h2>
                        <span className="text-gray-400">·</span>
                        <span className="text-sm text-gray-500">{date}</span>
                      </div>
                      <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#564FCC] hover:text-[#4842a8] transition-colors text-sm text-glow"
                      >
                        <LinkIcon className="h-4 w-4" />
                        <span>Visit Project</span>
                      </a>
                    </div>
                    {mood && (
                      <div className="inline-flex items-center gap-2 bg-gray-100/80 px-3 py-1 rounded-full">
                        <Palmtree className="h-4 w-4 text-green-600" />
                        <span className="text-sm text-gray-700">{mood}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Descripción */}
                <p className="text-gray-700 text-sm mb-6">{description}</p>

                {/* Input de Comentario */}
                <div className="flex gap-3 items-start mb-6">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=current-user"
                    alt="Current User"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <textarea
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSubmitComment(e);
                        }
                      }}
                      placeholder="Añade un comentario..."
                      className="w-full min-h-[60px] p-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#564FCC] focus:border-transparent resize-none"
                    />
                    <div className="flex justify-end mt-2">
                      <button
                        onClick={handleSubmitComment}
                        disabled={!commentText.trim()}
                        className="px-4 py-1.5 bg-[#564FCC] text-white text-sm rounded-full font-medium hover:bg-[#4842a8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Comentar
                      </button>
                    </div>
                  </div>
                </div>

                {/* Lista de Comentarios */}
                <div className="space-y-4 max-h-[200px] overflow-y-auto">
                  {projectComments.map((comment) => (
                    <div key={comment.id} className="flex gap-3">
                      <img
                        src={comment.avatar}
                        alt={comment.user}
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="bg-gray-50 rounded-2xl p-3">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-sm text-gray-900">{comment.user}</span>
                            <span className="text-xs text-gray-500">{comment.timestamp}</span>
                          </div>
                          <p className="text-sm text-gray-700">{comment.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
