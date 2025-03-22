import json
from setuptools import setup
from pathlib import Path

here = Path(__file__).parent
with open('package.json') as f:
    package = json.load(f)

# Fix the README reading with explicit encoding
try:
    with open('README.md', 'r', encoding='utf-8') as f:
        long_description = f.read()
except UnicodeDecodeError:
    # Fallback if there are encoding issues
    long_description = "Dash Particles - Interactive particle animations for Dash applications"

package_name = package["name"].replace(" ", "_").replace("-", "_")

setup(
    name=package_name,
    version=package["version"],
    author=package['author'],
    packages=[package_name],
    include_package_data=True,
    license=package['license'],
    description=package.get('description', package_name),
    long_description=long_description,
    long_description_content_type="text/markdown",
    install_requires=[],
    classifiers = [
        'Framework :: Dash',
    ],    
)
