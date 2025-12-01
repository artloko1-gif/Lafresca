import React, { useRef } from 'react';
import { useContent } from '../contexts/ContentContext';
import { Upload, Edit3 } from 'lucide-react';

interface EditableTextProps {
  id: string;
  defaultText: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'div';
}

export const EditableText: React.FC<EditableTextProps> = ({ id, defaultText, className, as: Tag = 'span' }) => {
  const { content, isEditing, updateContent } = useContent();
  const text = content[id] || defaultText;

  if (isEditing) {
    return (
      <Tag 
        className={`${className} cursor-text border-b border-dashed border-fresca-bronze/50 hover:bg-white/10 outline-none transition-colors`}
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => updateContent(id, e.currentTarget.textContent || '')}
      >
        {text}
      </Tag>
    );
  }

  return <Tag className={className}>{text}</Tag>;
};

interface EditableImageProps {
  id: string;
  defaultSrc: string;
  alt: string;
  className?: string;
}

export const EditableImage: React.FC<EditableImageProps> = ({ id, defaultSrc, alt, className }) => {
  const { content, isEditing, updateContent } = useContent();
  const src = content[id] || defaultSrc;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        updateContent(id, base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      
      {isEditing && (
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="bg-white text-fresca-dark px-4 py-2 rounded shadow-lg flex items-center gap-2 font-bold text-sm hover:bg-fresca-bronze hover:text-white transition-colors"
          >
            <Upload size={16} /> Změnit obrázek
          </button>
          <input 
            type="file" 
            ref={fileInputRef}
            className="hidden" 
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      )}
    </div>
  );
};
