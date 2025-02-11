import { useEffect, useState, useCallback, useRef } from 'react';
import styled from 'styled-components';

const TextContainer = styled.p`
  white-space: pre-wrap;
  word-wrap: break-word;
  max-width: 100%;
  display: block;
  text-align: inherit;
`;

interface DecryptedTextProps {
  text: string;
  isDecrypted: boolean;
  setIsDecrypted: (value: boolean) => void;
  className?: string;
}

const DecryptedText = ({
  text,
  isDecrypted,
  setIsDecrypted,
  className = '',
}: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const charsPerBatch = 2;
  const animationSpeed = 10; // ms entre cada actualización

  const generateRandomChar = (char: string) => {
    if (char === ' ' || char === '\n') return char;
    const chars = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789';
    return chars[Math.floor(Math.random() * chars.length)];
  };

  const decryptCharacters = useCallback((startIndex: number) => {
    if (startIndex >= text.length) {
      setIsDecrypted(true);
      setDisplayText(text);
      return;
    }

    setDisplayText(prev => {
      const newText = prev.split('');
      // Actualizar los caracteres en el batch actual
      for (let i = 0; i < charsPerBatch && startIndex + i < text.length; i++) {
        newText[startIndex + i] = text[startIndex + i];
      }
      // Generar caracteres aleatorios para el resto
      for (let i = startIndex + charsPerBatch; i < text.length; i++) {
        if (newText[i] !== ' ' && newText[i] !== '\n' && newText[i] !== text[i]) {
          newText[i] = generateRandomChar('x');
        }
      }
      return newText.join('');
    });

    timeoutRef.current = setTimeout(
      () => decryptCharacters(startIndex + charsPerBatch),
      animationSpeed
    );
  }, [text, setIsDecrypted]);

  useEffect(() => {
    if (!isDecrypted) {
      // Inicializar con caracteres aleatorios
      const initialText = text.split('').map(char => 
        char === ' ' || char === '\n' ? char : generateRandomChar(char)
      ).join('');
      setDisplayText(initialText);

      // Comenzar la decodificación después de un retraso
      timeoutRef.current = setTimeout(() => decryptCharacters(0), 200);
    } else {
      setDisplayText(text);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, isDecrypted, decryptCharacters]);

  return (
    <TextContainer className={className}>
      {displayText}
    </TextContainer>
  );
};

export default DecryptedText;