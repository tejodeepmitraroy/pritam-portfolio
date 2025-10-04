'use server';

import { sanityFetch } from '../lib/client';
import {
	ALL_PROJECTS_QUERY,
	ALL_BLOGS_QUERY,
	PROJECT_BY_SLUG_QUERY,
	ABOUT_QUERY,
	SOCIAL_LINKS_QUERY,
	SKILLS_QUERY,
	PRIVACY_POLICY_QUERY,
	BLOG_BY_SLUG_QUERY,
	TERMS_CONDITIONS_QUERY,
	REFUND_POLICY_QUERY,
	ALL_EXPERIENCE_QUERY,
	EXPERIENCE_BY_ID_QUERY,
	SERVICES_QUERY,
} from './queries';
import {
	About,
	Blogs,
	Experience,
	PrivacyPolicy,
	Projects,
	RefundPolicy,
	Services,
	Skills,
	SocialLinks,
	TermsConditions,
} from '@/types/sanity.types';

//Pages
export const getAbout = async () =>
	await sanityFetch<About>({
		query: ABOUT_QUERY,
	});

export const getSocialLinks = async () =>
	await sanityFetch<SocialLinks[]>({
		query: SOCIAL_LINKS_QUERY,
	});

export const getSkills = async () =>
	await sanityFetch<Skills[]>({
		query: SKILLS_QUERY,
	});

//Experience
export const getAllExperience = async () =>
	await sanityFetch<Experience[]>({ query: ALL_EXPERIENCE_QUERY });

export const getExperienceById = async (id: string) =>
	await sanityFetch<Experience>({ query: EXPERIENCE_BY_ID_QUERY(id) });

//Services
export const getAllServices = async () =>
	await sanityFetch<Services[]>({ query: SERVICES_QUERY });

//Projects
export const getAllProjects = async () =>
	await sanityFetch<Projects[]>({ query: ALL_PROJECTS_QUERY });

export const getProjectBySlug = async (slug: string) =>
	await sanityFetch<Projects>({ query: PROJECT_BY_SLUG_QUERY(slug) });

//Blogs
export const getBlogs = async () =>
	await sanityFetch<Blogs[]>({ query: ALL_BLOGS_QUERY });

export const getBlogBySlug = async (slug: string) =>
	await sanityFetch<Blogs>({
		query: BLOG_BY_SLUG_QUERY(slug),
	});

//Policies
export const getPrivacyPolicy = async () =>
	await sanityFetch<PrivacyPolicy>({
		query: PRIVACY_POLICY_QUERY,
	});

export const getTermsConditions = async () =>
	await sanityFetch<TermsConditions>({
		query: TERMS_CONDITIONS_QUERY,
	});

export const getRefundPolicy = async () =>
	await sanityFetch<RefundPolicy>({
		query: REFUND_POLICY_QUERY,
	});
