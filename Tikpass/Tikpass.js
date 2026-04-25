tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "surface-container-lowest": "#0b0f10",
                "primary-fixed": "#ffd8e6",
                "surface-bright": "#363a3b",
                "on-surface": "#e0e3e5",
                "background": "#101415",
                "outline-variant": "#564149",
                "on-error-container": "#ffdad6",
                "on-error": "#690005",
                "tertiary": "#c3c0ff",
                "error": "#ffb4ab",
                "surface-tint": "#ffb0d0",
                "secondary-container": "#005361",
                "outline": "#a48a93",
                "surface-container-low": "#191c1e",
                "on-primary-container": "#6e0044",
                "inverse-primary": "#ac2471",
                "surface-container": "#1d2022",
                "secondary-fixed": "#adedfe",
                "surface-variant": "#323537",
                "secondary": "#91d0e1",
                "primary-container": "#ff69b4",
                "inverse-surface": "#e0e3e5",
                "tertiary-container": "#9896ed",
                "on-background": "#e0e3e5",
                "on-primary": "#63003d",
                "surface-dim": "#101415",
                "surface": "#101415",
                "primary": "#ffb0d0",
                "surface-container-high": "#272a2c",
                "surface-container-highest": "#323537",
                "on-surface-variant": "#dcbfc9",
            },
            "fontFamily": {
                "body-md": ["Epilogue"],
                "h2": ["Epilogue"],
                "label-bold": ["Epilogue"],
                "h3": ["Epilogue"],
                "h1": ["Epilogue"],
                "label-sm": ["Epilogue"],
                "body-lg": ["Epilogue"]
            },
            "fontSize": {
                "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
                "h2": ["32px", {"lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                "label-bold": ["14px", {"lineHeight": "1.2", "fontWeight": "600"}],
                "h3": ["24px", {"lineHeight": "1.3", "fontWeight": "600"}],
                "h1": ["48px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                "label-sm": ["12px", {"lineHeight": "1.2", "fontWeight": "500"}],
                "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}]
            }
        },
    },
};
function previewImage(input, previewId) {
    const preview = document.getElementById(previewId);
    const placeholder = document.getElementById(previewId.replace('preview', 'placeholder'));
    
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            // Hiển thị ảnh
            preview.src = e.target.result;
            preview.classList.remove('hidden');
            // Ẩn chữ và icon placeholder
            if (placeholder) {
                placeholder.classList.add('hidden');
            }
        }

        reader.readAsDataURL(input.files[0]);
    }
}