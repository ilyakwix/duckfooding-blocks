import classNames from 'classnames';
import { createBoard } from '@wixc3/react-board';
import styles from './style-guide.board.module.scss';
import SectionSvg from '../../../assets/section.svg';

export default createBoard({
    name: 'Style Guide',
    Board: () => (
        <div className={classNames(styles.root)}>
            <section className={styles.pageHeader}>
                <h1 className={styles.pageTitle}>Style Guide</h1>
                <div className={styles.logo}>
                    <span className={styles.logoMarker}>Noco</span>Blox
                </div>
            </section>
            <section>
                <div className={styles.sectionHeader}>
                    <img className={styles.asterisk} src={SectionSvg} />
                    <div>
                        <h2 className={styles.sectionTitle}>Typography</h2>
                        <p className={styles.sectionSubtitle}>
                            Defines the fonts used for headings, body text, labels, etc., including
                            size, weight, and spacing.
                        </p>
                    </div>
                </div>
                <div className={styles.subSection}>
                    <div className={styles.contentBlock}>
                        <h2 className={styles.subSectionTitle}>Font Family</h2>
                        <div className={styles.flexContainer}>
                            <div>
                                <div className={styles.fontFamilyContainer}>
                                    <span
                                        className={classNames(
                                            styles.fontFamilyAa,
                                            styles.displayFont,
                                        )}
                                    >
                                        Aa
                                    </span>
                                    <span className={classNames('pNormal')}></span>
                                </div>
                                <div className={styles.details}>Poppins</div>
                            </div>
                            <div>
                                <div className={styles.fontFamilyContainer}>
                                    <span
                                        className={classNames(styles.fontFamilyAa, styles.fontText)}
                                    >
                                        Aa
                                    </span>
                                </div>
                                <div className={styles.details}>Inter</div>
                            </div>
                            <div>
                                <div className={styles.fontFamilyContainer}>
                                    <span
                                        className={classNames(
                                            styles.fontFamilyAa,
                                            styles.handwriting,
                                        )}
                                    >
                                        Aa
                                    </span>
                                </div>
                                <div className={styles.details}>Caveat</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.subSection}>
                    <div className={styles.contentBlock}>
                        <h2 className={styles.subSectionTitle}>Heading One</h2>
                        <h1 className={styles.headingOne}>Design is a language, not a style.</h1>
                        <div className={styles.details}>Poppins, 800</div>
                    </div>
                    <div className={styles.contentBlock}>
                        <h2 className={styles.subSectionTitle}>Heading Two</h2>
                        <h2 className={styles.headingTwo}>Design is thinking made visual.</h2>
                        <div className={styles.details}>Poppins, 700</div>
                    </div>
                    <div className={styles.contentBlock}>
                        <h2 className={styles.subSectionTitle}>Heading Three</h2>
                        <h1 className={styles.headingThree}>
                            Good design is as little design as possible.
                        </h1>
                        <div className={styles.details}>Poppins, 700</div>
                    </div>
                    <div className={styles.contentBlock}>
                        <h2 className={styles.subSectionTitle}>Heading Four</h2>
                        <h1 className={styles.headingFour}>
                            Creativity comes from a conflict of ideas.{' '}
                        </h1>
                        <div className={styles.details}>Poppins, 700</div>
                    </div>
                    <div className={styles.contentBlock}>
                        <h2 className={styles.subSectionTitle}>Heading Five</h2>
                        <h1 className={styles.headingFive}>
                            It&apos;s very easy to be different, but very difficult to be better.{' '}
                        </h1>
                        <div className={styles.details}>Inter, 700</div>
                    </div>
                    <div className={styles.contentBlock}>
                        <h2 className={styles.subSectionTitle}>Heading Six</h2>
                        <h1 className={styles.headingSix}>
                            Like all good design, mine is ridiculously simple, but it solves a
                            problem.
                        </h1>
                        <div className={styles.details}>Inter, 700</div>
                    </div>
                    <div className={styles.contentBlock}>
                        <h2 className={styles.subSectionTitle}>Heading Six – Small</h2>
                        <h1 className={styles.headingSixSmall}>
                            Design is not for philosophy, it&apos;s for life.{' '}
                        </h1>
                        <div className={styles.details}>Inter, 700</div>
                    </div>
                    <div className={styles.contentBlock}>
                        <h2 className={styles.subSectionTitle}>Large Text</h2>
                        <p className={styles.textLarge}>
                            Dieter Rams is a highly influential German industrial designer best
                            known for his work with the consumer products company Braun and the
                            furniture company Vitsœ.
                        </p>
                        <div className={styles.details}>Inter, 400</div>
                    </div>
                    <div className={styles.contentBlock}>
                        <h2 className={styles.subSectionTitle}>Body Text</h2>
                        <p className={styles.textBody}>
                            Born in 1932, Rams introduced the world to functionalist design
                            principles, which emphasize the importance of making products
                            aesthetically pleasing, useful, and understandable. His design
                            philosophy is encapsulated in his ten principles for good design,
                            advocating for simplicity and honesty in design.
                        </p>
                        <div className={styles.details}>Inter, 400</div>
                    </div>
                    <div className={styles.contentBlock}>
                        <h2 className={styles.subSectionTitle}>Small Text</h2>
                        <p className={styles.textSmall}>
                            Rams' work has had a lasting impact on the design of consumer products
                            and has inspired a generation of designers, including Apple's former
                            Chief Design Officer, Jonathan Ive. His principles and philosophy
                            continue to be a benchmark for designers striving for sustainability and
                            functionality in their creations.
                        </p>
                        <div className={styles.details}>Inter, 400</div>
                    </div>
                    <div className={styles.contentBlock}>
                        <h2 className={styles.subSectionTitle}>Handwriting</h2>
                        <p className={styles.handwritingThree}>
                            Like all good design, mine is ridiculously simple, but it solves a
                            problem.
                        </p>
                        <div className={styles.details}>Inter, 700</div>
                    </div>
                </div>
            </section>

            <section>
                <div className={styles.sectionHeader}>
                    <img className={styles.asterisk} src={SectionSvg} />
                    <div>
                        <h2 className={styles.sectionTitle}>Colors</h2>
                        <p className={styles.sectionSubtitle}>
                            Colors are a powerful tool in design for communicating meaning and
                            influencing user perception. Here&apos;s colors can contribute to the
                            success of your design by conveying specific
                        </p>
                    </div>
                </div>
                <div className={styles.subSection}>
                    <div className={styles.contentBlock}>
                        <h2 className={styles.subSectionTitle}>Theme Colors</h2>
                        <div className={styles.flexContainer}>
                            <div>
                                <div
                                    className={classNames(
                                        styles.colorContainer,
                                        styles.colorPrimary,
                                    )}
                                />
                                <div className={styles.details}>Primary</div>
                            </div>
                            <div>
                                <div
                                    className={classNames(
                                        styles.colorContainer,
                                        styles.colorSecondary,
                                    )}
                                />
                                <div className={styles.details}>Secondary</div>
                            </div>
                            <div>
                                <div
                                    className={classNames(
                                        styles.colorContainer,
                                        styles.colorAccent,
                                    )}
                                />
                                <div className={styles.details}>Accent</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contentBlock}>
                        <h2 className={styles.subSectionTitle}>Grays</h2>
                        <div className={styles.flexContainer}>
                            <div>
                                <div
                                    className={classNames(styles.colorContainer, styles.colorWhite)}
                                />
                                <div className={styles.details}>White</div>
                            </div>
                            <div>
                                <div
                                    className={classNames(
                                        styles.colorContainer,
                                        styles.colorGray100,
                                    )}
                                />
                                <div className={styles.details}>Gray 1</div>
                            </div>
                            <div>
                                <div
                                    className={classNames(
                                        styles.colorContainer,
                                        styles.colorGray200,
                                    )}
                                />
                                <div className={styles.details}>Gray 2</div>
                            </div>
                            <div>
                                <div
                                    className={classNames(
                                        styles.colorContainer,
                                        styles.colorGray300,
                                    )}
                                />
                                <div className={styles.details}>Gray 3</div>
                            </div>
                            <div>
                                <div
                                    className={classNames(styles.colorContainer, styles.colorBlack)}
                                />
                                <div className={styles.details}>Black</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contentBlock}>
                        <h2 className={styles.subSectionTitle}>Feedback</h2>
                        <div className={styles.flexContainer}>
                            <div>
                                <div
                                    className={classNames(
                                        styles.colorContainer,
                                        styles.colorSuccess,
                                    )}
                                />
                                <div className={styles.details}>Success</div>
                            </div>
                            <div>
                                <div
                                    className={classNames(
                                        styles.colorContainer,
                                        styles.colorWarning,
                                    )}
                                />
                                <div className={styles.details}>Warning</div>
                            </div>
                            <div>
                                <div
                                    className={classNames(styles.colorContainer, styles.colorError)}
                                />
                                <div className={styles.details}>Error</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className={styles.sectionHeader}>
                    <img className={styles.asterisk} src={SectionSvg} />
                    <div>
                        <h2 className={styles.sectionTitle}>Shadows</h2>
                        <p className={styles.sectionSubtitle}>
                            Shadows help create the illusion of depth and dimension in a flat, 2D
                            digital space. By simulating how light interacts with objects in the
                            real world, shadows visually separate elements, define their shapes, and
                            show their relative positions.
                        </p>
                    </div>
                </div>
                <div className={styles.subSection}>
                    <div className={styles.flexContainer}>
                        <div>
                            <div
                                className={classNames(styles.shadowContainer, styles.shadowSmall)}
                            />
                            <div className={styles.details}>Small</div>
                        </div>
                        <div>
                            <div
                                className={classNames(styles.shadowContainer, styles.shadowMedium)}
                            />
                            <div className={styles.details}>Medium</div>
                        </div>
                        <div>
                            <div
                                className={classNames(styles.shadowContainer, styles.shadowLarge)}
                            />
                            <div className={styles.details}>Large</div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className={styles.sectionHeader}>
                    <img className={styles.asterisk} src={SectionSvg} />
                    <div>
                        <h2 className={styles.sectionTitle}>Spacing</h2>
                        <p className={styles.sectionSubtitle}>
                            Spacing is a crucial element in design systems, as it dictates the
                            negative space or &quot;white space&quot; between UI components. This
                            space plays a significant role in visual Hierarchy, Aesthetics and
                            Balance.
                        </p>
                    </div>
                </div>
                <div className={styles.subSection}>
                    <div className={styles.spacingList}>
                        <div>
                            <div className={classNames(styles.spacingBlock, styles.spacing2)} />
                            <div className={styles.details}>2px</div>
                        </div>
                        <div>
                            <div className={classNames(styles.spacingBlock, styles.spacing4)} />
                            <div className={styles.details}>4px</div>
                        </div>
                        <div>
                            <div className={classNames(styles.spacingBlock, styles.spacing8)} />
                            <div className={styles.details}>8px </div>
                        </div>
                        <div>
                            <div className={classNames(styles.spacingBlock, styles.spacing12)} />
                            <div className={styles.details}>12px</div>
                        </div>
                        <div>
                            <div className={classNames(styles.spacingBlock, styles.spacing16)} />
                            <div className={styles.details}>16px</div>
                        </div>
                        <div>
                            <div className={classNames(styles.spacingBlock, styles.spacing20)} />
                            <div className={styles.details}>20px</div>
                        </div>
                        <div>
                            <div className={classNames(styles.spacingBlock, styles.spacing24)} />
                            <div className={styles.details}>24px</div>
                        </div>
                        <div>
                            <div className={classNames(styles.spacingBlock, styles.spacing32)} />
                            <div className={styles.details}>32px</div>
                        </div>
                        <div>
                            <div className={classNames(styles.spacingBlock, styles.spacing40)} />
                            <div className={styles.details}>40px</div>
                        </div>
                        <div>
                            <div className={classNames(styles.spacingBlock, styles.spacing48)} />
                            <div className={styles.details}>48px</div>
                        </div>
                        <div>
                            <div className={classNames(styles.spacingBlock, styles.spacing64)} />
                            <div className={styles.details}>64px</div>
                        </div>
                        <div>
                            <div className={classNames(styles.spacingBlock, styles.spacing80)} />
                            <div className={styles.details}>80px</div>
                        </div>
                        <div>
                            <div className={classNames(styles.spacingBlock, styles.spacing120)} />
                            <div className={styles.details}>120px</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    ),
    isSnippet: false,
    environmentProps: {
        windowWidth: 1014,
        canvasWidth: 1021,
        canvasHeight: 1576,
        windowHeight: 1659,
        canvasMargin: {
            left: 1,
            right: 1,
            top: 1,
        },
    },
});
