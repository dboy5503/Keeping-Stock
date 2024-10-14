import React, { useState, useRef, useEffect } from 'react';

interface EditableTitleProps {
    initialTitle: string;
    onSave: (newTitle: string) => void;
}

const EditableTitle: React.FC<EditableTitleProps> = ({ initialTitle, onSave }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(initialTitle);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleTitleClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleInputBlur = () => {
        setIsEditing(false);
        onSave(title);
    };

    const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setIsEditing(false);
            onSave(title);
        }
    };

    return (
        <div>
            {isEditing ? (
                <input
                    ref={inputRef}
                    type="text"
                    value={title}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    onKeyPress={handleInputKeyPress}
                />
            ) : (
                <h1 onClick={handleTitleClick}>{title}</h1>
            )}
        </div>
    );
};

export default EditableTitle;