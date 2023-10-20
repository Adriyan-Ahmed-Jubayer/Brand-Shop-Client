const Faq = () => {
    return (
        <>
            <section className="mb-5 md:mb-8 lg:mb-12">
                <h1 className="text-center text-xl md:text-3xl lg:text-5xl font font-semibold my-4 md:my-7 lg:my-9">F&Q</h1>
                <div className="container mx-auto bg-purple-500 rounded-lg text-white">
                    <div tabIndex={0} className="collapse collapse-plus border rounded-none">
                        <div className="collapse-title text-xl font-medium">
                            What is the difference between 4K and 1080p resolution in TVs?
                        </div>
                        <div className="collapse-content">
                            <p>Answer: 4K provides a higher resolution (3840x2160) compared to 1080p (1920x1080), resulting in a sharper and more detailed image on compatible displays.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border rounded-none">
                        <div className="collapse-title text-xl font-medium">
                        How can I protect my computer from malware and viruses?
                        </div>
                        <div className="collapse-content">
                            <p>Answer: Install reliable antivirus software, keep your operating system and software up to date, and be cautious about downloading files or clicking on suspicious links.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border rounded-none">
                        <div className="collapse-title text-xl font-medium">
                        Which smartphone operating system is better, iOS, or Android?
                        </div>
                        <div className="collapse-content">
                            <p>Answer: The choice between iOS and Android depends on personal preferences. iOS offers a more closed and secure ecosystem, while Android provides greater customization options.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border rounded-none">
                        <div className="collapse-title text-xl font-medium">
                        How can I improve the battery life of my smartphone?
                        </div>
                        <div className="collapse-content">
                            <p>Answer: You can optimize battery life by reducing screen brightness, disabling unnecessary apps and features, and keeping your device's software up to date.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border rounded-none">
                        <div className="collapse-title text-xl font-medium">
                        How can I choose the right laptop for my needs?
                        </div>
                        <div className="collapse-content">
                            <p>Answer: Consider factors like your intended use (gaming, productivity, etc.), budget, screen size, processor, RAM, and storage capacity.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faq;