document.addEventListener('DOMContentLoaded', function() {
            const colorCheckbox = document.getElementById('colorCheckbox');
            const colorOptions = document.getElementById('colorOptions');
            const submitBtn = document.getElementById('submitBtn');
            const textInput = document.getElementById('textInput');
            const output = document.getElementById('output');
            
            colorCheckbox.addEventListener('change', function() {
                colorOptions.style.display = this.checked ? 'block' : 'none';
            });
            
            submitBtn.addEventListener('click', function() {
                
                const text = textInput.value;
                
                if (!text) {
                    alert('Введите текст!');
                    return;
                }
                
                const isBold = document.getElementById('boldCheckbox').checked;
                const isItalic = document.getElementById('italicCheckbox').checked;
                const changeColor = document.getElementById('colorCheckbox').checked;
                
                let color = 'black';
                if (changeColor) {
                    const selectedColor = document.querySelector('input[name="color"]:checked');
                    color = selectedColor ? selectedColor.value : 'black';
                }
            
                output.style.whiteSpace = 'pre-wrap'

                output.innerHTML = text;
                output.style.color = color;
                
                if (isBold) {
                    output.classList.add('bold');
                } else {
                    output.classList.remove('bold');
                }
                
                if (isItalic) {
                    output.classList.add('italic');
                } else {
                    output.classList.remove('italic');
                }
            });
        });